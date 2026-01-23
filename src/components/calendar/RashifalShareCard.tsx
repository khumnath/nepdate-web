
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

export const RashifalShareCard: React.FC<RashifalShareCardProps> = ({ data, date, onLoad }) => {
	return (
		<div
			id="share-card-container"
			className="fixed top-0 left-0 -z-50 pointer-events-none"
			style={{ width: '600px', height: '666px' }}
		>
			{/* Outer Container - cream background with orange border */}
			<div className="w-full h-full bg-[#F5F1E8] border-[6px] border-[#C76F32] rounded-[32px] p-6 flex flex-col relative overflow-hidden">

				{/* Background Zodiac Wheel - very subtle */}
				<div className="absolute inset-0 flex items-center justify-center pointer-events-none" style={{ opacity: 0.06 }}>
					<img
						src={wheelImage}
						alt="Zodiac Wheel"
						className="w-[600px] h-[600px] object-contain"
						style={{ filter: 'blur(1px)' }}
					/>
				</div>

				{/* Header Section */}
				<div className="flex justify-between items-start z-10">
					{/* Title and Date */}
					<div>
						<h1
							className="text-[38px] font-black text-[#D2691E] leading-[0.95] tracking-tight m-0 p-0"
							style={{ fontFamily: "'Mukta', 'Noto Sans Devanagari', sans-serif" }}
						>
							दैनिक<br />राशिफल
						</h1>
						<p
							className="text-[16px] font-semibold text-gray-800 m-2"
							style={{ fontFamily: "'Noto Sans Devanagari', sans-serif" }}
						>
							{date}
						</p>
					</div>

					{/* Logo */}
					<div className="rounded-2xl shadow-lg p-3">
						<div className="scale-75 origin-top-right">
							<img
								src={AppLogo}
								alt="NepDate Logo"
								className="w-24 h-24 object-contain"
							/>
						</div>
					</div>
				</div>

				{/* Inner White Card - semi-transparent per mockup */}
				<div
					className="rounded-[24px] shadow-xl p-6 z-10 flex items-center"
					style={{
						backgroundColor: 'rgba(255, 255, 255, 0.5)',
						marginTop: '86px'
					}}
				>
					<div className="w-full flex gap-6 items-center">
						{/* Left Section - Icon, Name, Syllables, Stars (35%) */}
						<div className="w-[35%] flex flex-col items-center justify-center">
							{/* Zodiac Icon */}
							<img
								src={RASHI_IMAGES[data.img] || data.img}
								alt={data.name}
								className="w-28 h-28 object-contain mb-3 drop-shadow-lg"
								onLoad={onLoad}
							/>

							{/* Rashi Name */}
							<h2
								className="text-[26px] font-bold text-[#D32F2F] mb-1 text-center leading-tight"
								style={{ fontFamily: "'Noto Sans Devanagari', sans-serif" }}
							>
								{data.name}
							</h2>

							{/* Syllables */}
							<p
								className="text-[11px] text-gray-500 mt-1 text-center leading-tight"
								style={{ fontFamily: "'Noto Sans Devanagari', sans-serif" }}
							>
								{data.syllables}
							</p>

							{/* Star Rating */}
							<div className="flex gap-1 mt-3">
								{[...Array(5)].map((_, i) => {
									const isFull = i < Math.floor(data.rating);
									let starColor = "text-gray-300 fill-gray-300";
									if (isFull) {
										if (data.rating >= 4) starColor = "text-[#D32F2F] fill-[#D32F2F]";
										else if (data.rating >= 3) starColor = "text-amber-500 fill-amber-500";
										else starColor = "text-red-400 fill-red-400";
									}
									return (
										<Star
											key={i}
											size={16}
											className={starColor}
										/>
									);
								})}
							</div>
						</div>

						{/* Right Section - Prediction Text (65%) */}
						<div className="w-[65%] flex items-center">
							<div className="w-full">
								<p
									className="text-[14px] text-gray-800 leading-[1.65] font-normal"
									style={{ fontFamily: "'Noto Sans Devanagari', sans-serif", textAlign: 'justify' }}
									dangerouslySetInnerHTML={{ __html: data.prediction }}
								/>
							</div>
						</div>
					</div>
				</div>

			</div>
		</div>
	);
};
