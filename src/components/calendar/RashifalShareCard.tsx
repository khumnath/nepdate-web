
import React from 'react';
import { Star } from 'lucide-react';
import { RASHI_IMAGES } from '../../assets/rashiImages';
import AppLogo from '../../assets/icons/nepdate.webp';
import wheelImage from '../../assets/rashi/wheel.webp';


interface RashifalShareCardProps {
	data: any;
	date: string;
	onLoad?: () => void;
}

// Helper to convert URL to Base64 - uses fetch (SW-interceptable) with Image+Canvas fallback
const useBase64Image = (url: string) => {
    const [base64, setBase64] = React.useState<string | null>(null);
    const [loaded, setLoaded] = React.useState(false);

    React.useEffect(() => {
        let active = true;

        // Already a data URL
        if (url.startsWith('data:')) {
            setBase64(url);
            setLoaded(true);
            return;
        }

        const loadImage = async () => {
            try {
                // Use fetch - this goes through Service Worker which can serve from precache
                const response = await fetch(url);
                const blob = await response.blob();

                // Convert blob to base64
                const reader = new FileReader();
                reader.onloadend = () => {
                    if (active) {
                        setBase64(reader.result as string);
                        setLoaded(true);
                    }
                };
                reader.onerror = () => {
                    if (active) {
                        console.error("FileReader failed for", url);
                        setBase64(url);
                        setLoaded(true);
                    }
                };
                reader.readAsDataURL(blob);
            } catch (e) {
                console.error("Failed to fetch image", url, e);
                // Fallback: try Image + Canvas approach
                const img = new Image();
                img.crossOrigin = 'anonymous';
                img.onload = () => {
                    if (!active) return;
                    try {
                        const canvas = document.createElement('canvas');
                        canvas.width = img.naturalWidth;
                        canvas.height = img.naturalHeight;
                        const ctx = canvas.getContext('2d');
                        if (ctx) {
                            ctx.drawImage(img, 0, 0);
                            setBase64(canvas.toDataURL('image/webp', 0.9));
                        } else {
                            setBase64(url);
                        }
                    } catch (err) {
                        setBase64(url);
                    }
                    setLoaded(true);
                };
                img.onerror = () => {
                    if (active) {
                        setBase64(url);
                        setLoaded(true);
                    }
                };
                img.src = url;
            }
        };

        loadImage();
        return () => { active = false; };
    }, [url]);

    return { src: base64, loaded };
};

// Helper to inline all current page CSS using CSSOM (no network fetch needed)
const useInlineStyles = () => {
    const [css, setCss] = React.useState<string>("");
    const [loaded, setLoaded] = React.useState(false);

    React.useEffect(() => {
        const extractStyles = () => {
            let combinedCss = "";
            try {
                Array.from(document.styleSheets).forEach(sheet => {
                    try {
                        const rules = sheet.cssRules || sheet.rules;
                        if (rules) {
                            Array.from(rules).forEach(rule => {
                                combinedCss += rule.cssText + "\n";
                            });
                        }
                    } catch (e) {
                        // Cross-origin stylesheets can't be read, skip them
                        console.warn("Cannot access rules for stylesheet", sheet.href);
                    }
                });
            } catch (e) {
                console.error("Error extracting styles from CSSOM", e);
            }

            setCss(combinedCss);
            setLoaded(true);
        };

        extractStyles();
    }, []);

    return { css, loaded };
};

export const RashifalShareCard: React.FC<RashifalShareCardProps> = ({ data, date, onLoad }) => {
    const rashiImgUrl = RASHI_IMAGES[data.img] || data.img;

    const wheel = useBase64Image(wheelImage);
    const logo = useBase64Image(AppLogo);
    const rashiIcon = useBase64Image(rashiImgUrl);
    const styles = useInlineStyles();

    React.useEffect(() => {
        // Wait for images AND styles
        if (wheel.loaded && logo.loaded && rashiIcon.loaded && styles.loaded && onLoad) {
            const timeout = setTimeout(onLoad, 100);
            return () => clearTimeout(timeout);
        }
    }, [wheel.loaded, logo.loaded, rashiIcon.loaded, styles.loaded, onLoad]);

	return (
		<div
			id="share-card-container"
			className="fixed top-0 left-0 -z-50 pointer-events-none"
			style={{ width: '600px', height: '650px' }}
		>
			{/* Inject inlined styles for html2canvas to pick up */}
			<style>{styles.css}</style>

			{/* Main Card - white background with rounded corners */}
			<div
				className="w-full h-full rounded-[32px] p-[30px] flex flex-col relative overflow-hidden"
				style={{ backgroundColor: '#ffffff', boxShadow: '0 10px 25px rgba(0,0,0,0.1)' }}
			>

				{/* Background Zodiac Wheel - centered and subtle */}
				<div
					className="absolute pointer-events-none"
					style={{
						top: '50%',
						left: '50%',
						transform: 'translate(-50%, -50%)',
						width: '550px',
						height: '550px',
						opacity: 0.1,
						zIndex: 0
					}}
				>
					<img
						src={wheel.src || wheelImage}
						alt="Zodiac Wheel"
						className="w-full h-full object-contain"
					/>
				</div>

				{/* Content Wrapper - sits above background */}
				<div className="relative z-10 h-full flex flex-col">

					{/* Header Section */}
					<div className="flex justify-between items-start mb-5">
						{/* Title and Date */}
						<div>
							<h1
								className="text-[42px] font-extrabold leading-none m-0 p-0"
								style={{ fontFamily: "'Mukta', sans-serif", color: '#4A90E2' }}
							>
								दैनिक<br />राशिफल
							</h1>
							<p
								className="text-[18px] font-bold mt-[5px]"
								style={{ fontFamily: "'Noto Sans Devanagari', sans-serif", color: '#D32F2F' }}
							>
								{date}
							</p>
						</div>

						{/* Logo */}
						<div>
							<img
								src={logo.src || AppLogo}
								alt="NepDate Logo"
								className="h-[66px] object-contain"
							/>
						</div>
					</div>

					{/* Hero Section - Icon, Name, Syllables, Stars (centered) */}
					<div className="flex flex-col items-center justify-center" style={{ marginTop: '-35px' }}>
						{/* Zodiac Icon */}
						<img
							src={rashiIcon.src || rashiImgUrl}
							alt={data.name}
							className="w-[140px] h-[140px] object-contain mb-[4px]"
						/>

						{/* Rashi Name */}
						<div
							className="text-[56px] font-extrabold leading-none mb-[10px]"
							style={{ fontFamily: "'Noto Sans Devanagari', sans-serif", color: '#D32F2F' }}
						>
							{data.name}
						</div>

						{/* Syllables */}
						<div
							className="text-[22px] font-medium mt-2 mb-[10px]"
							style={{ fontFamily: "'Noto Sans Devanagari', sans-serif", color: '#2b4c85' }}
						>
							{data.syllables}
						</div>

						{/* Star Rating */}
						<div className="flex gap-2 mb-[25px]">
							{[...Array(5)].map((_, i) => {
								const isFull = i < Math.floor(data.rating);
								return (
									<Star
										key={i}
										size={24}
										className={isFull ? "text-[#D32F2F] fill-[#D32F2F]" : "text-[#D1D5DB] fill-[#D1D5DB]"}
									/>
								);
							})}
						</div>
					</div>

					{/* Prediction Text - centered */}
					<div className="text-center px-5 pb-5">
						<p
							className="text-[22px] font-medium leading-[1.5]"
							style={{ fontFamily: "'Noto Sans Devanagari', sans-serif", color: '#222' }}
							dangerouslySetInnerHTML={{ __html: data.prediction }}
						/>
					</div>

				</div>
			</div>
		</div>
	);
};
