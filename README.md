
# Nepdate: Bikram Sambat PWA & Kundali Engine

**Live Demo:** [**nepdate.khumnath.com.np**](https://nepdate.khumnath.com.np "null") | **Source Code:** [**github.com/khumnath/nepdate-web**](https://github.com/khumnath/nepdate-web "null")

A progressive web application (PWA) and astrological engine for Bikram Sambat. This project provides a full-featured calendar, Panchanga, and detailed Kundali (Vedic Horoscope) generation, built with a modern TypeScript stack.

## Key Features

-   **Progressive Web App (PWA):** A responsive, installable web application built with **React** and **TypeScript**, designed for both desktop and mobile devices.

-   **Dual Calculation Logic:** The project uses two distinct calculation engines:

    1.  **Kundali Engine (`astroCalc.ts`):** Uses a modern ephemeris (based on VSOP87/ELP2000 approximations) for all astrological calculations.

    2.  **Calendar Engine (`panchangaCore.ts`):** Uses a traditional **Surya Siddhanta**-based calculation for the main calendar's Panchanga, aligning with the traditional Nepali patro (almanac).

-   **Main Calendar & Traditional Panchanga:**

    -   **Hybrid Data System:** Uses pre-computed monthly data for the 90-year period from **2000 BS to 2089 BS**.(**Source: hamropatro**)

    -   **Algorithmic Fallback:** For dates outside this primary range, the Panchanga is algorithmically computed using Surya Siddhanta logic.

    -   **Location-Specific:** All main calendar and Panchanga data is fixed to the **Kathmandu, Nepal** location, regardless of the user's location.

    -   **Panchanga Timings:** Calculates and displays the start and end times for all Panchanga elements (Tithi, Nakshatra, etc.), including spans across midnight into the previous or next day.

-   **Kundali & Astrological Engine:**

    -   **Timezone & Location-Aware:** All Kundali calculations are specific to the user's input (**date, time, latitude, longitude, and timezone offset**).

    -   **Ayanamsa:** Uses the standard **Lahiri (Chitrapaksha) Ayanamsa** (

        $$\\ A(T) = 85885.53192 + 5029.0966 \cdot T + 1.11161 \cdot T^2$$

        ).

    -   **Core Charts:** Generates the **D1 (Lagna Chart)** and **Chandra Lagna (Moon Chart)**, including the Lagna (Ascendant), 12 Houses (Whole Sign system), and all Graha positions.

    -   **Divisional Charts (Varga):** Computes all major divisional charts:

        -   **D9 (Navamsha)**

        -   **D10 (Dashamsha)**

        -   **D3 (Drekkana)**

        -   **D4 (Chaturthamsha)**

        -   **D12 (Dwadashamsha)**

        -   **D60 (Shashtyamsha)**

    -   **Dasha Systems:** Calculates multiple Dasha sequences:

        -   **Vimshottari Dasha** (with Antardashas)

        -   **Ashtottari Dasha** (with Antardashas)

        -   **Yogini Dasha** (with Antardashas)

        -   **Jaimini Chara Dasha** (with Antardashas)

        -   **Tribhagi Dasha**

    -   **Ashta Koota & Guna Milan:** Includes a **Kundali matching (Guna Milan)** feature based on the 36-point Ashta Koota system.

-   **Refined UI & Social Integration:**

    -   **Responsive Design:** Enhanced mobile and desktop navigation with dynamic headers, transparent overlays, and optimized touch interactions.
    -   **Social Connectivity:** Integrated Facebook Page widget and easy content sharing options.
    -   **Theme Personalization:** User-friendly light/dark mode toggles across devices.

-   **Authentic Cultural Data:**

    -   **Accurate Etymologies:** Corrected definitions for cultural terms (e.g., Lhosar) based on linguistic research (Tibetan sources).
    -   **Standardized Content:** Consistent authoring and verified festival details.

-   **Dharma & Spirituality:**

    -   **Dharma Hub:** A dedicated section for Hindu rituals (**Puja**), spiritual chants (**Mantra**), and comprehensive festival guides (**Chadparba**).
    -   **Live FM Radio:** Integrated streaming of popular Nepali FM stations with auto-reconnect and stability modes.
    -   **Sunrise/Sunset:** Daily astronomical timings for Kathmandu.

-   **Daily Utilities:**

    -   **Rashifal (Daily Horoscope):** Personalized daily zodiac predictions.
    -   **Date Converter:** Bidirectional **AD ↔ BS** converter with historic data support.
    -   **Blog & News:** Curated cultural articles and updates.

-   **Modern Tech Stack:**

    -   **Frontend:** React (TypeScript), Tailwind CSS.

    -   **Backend (API):** Node.js (TypeScript), Express.

    -   **Core Engine:** A modular library of pure TypeScript files (`astroCalc.ts`, `horoscopeService.ts`, `panchangaCore.ts`, `bikram.ts`).


> ### ⚠️ Disclaimer on Accuracy
>
> **For Calendar & Panchanga:** Astrological calculations are based on observational systems, and timings can differ from other sources. While every effort has been made for accuracy, the data may contain mistakes. For official or ceremonial purposes, please always consult a calendar approved by the **Nepal Panchanga Nirnayak Samiti (नेपाल पञ्चाङ्ग निर्णायक समिति)**.
>
> **For Kundali (Birth Chart):** The generated Kundali may differ based on the mathematical models used and the accuracy of the provided birth time and place. Please consult with a qualified expert before analyzing the chart or making any decisions based on it.
>
> **For Rashifal (Daily Horoscope):** These predictions are based on general zodiac signs and planetary transits. They are for general guidance only and should not be considered as personal advice or absolute destiny.

## Building From Source

This guide provides instructions for compiling and running the project from the source code.

### 1. Install Dependencies

You must have **Node.js** (version 18 or higher) and **npm** (or `yarn`) installed on your system.

### 2. Run Locally

1.  **Clone the Repository**

    ```
    git clone https://github.com/khumnath/nepdate-web.git
    cd nepdate-web

    ```

2.  **Install All Dependencies** _Using Yarn (Recommended):_

    ```
    yarn install

    ```

    _Or using npm:_

    ```
    npm install

    ```

3.  **Run the Project (Development Mode)** _Using Yarn:_

    ```
    yarn dev

    ```

    _Or using npm:_

    ```
    npm run dev

    ```

4.  **Build & Preview (Production Mode)** _Using Yarn:_

    ```
    yarn build
    yarn preview

    ```

    _Or using npm:_

    ```
    npm run build
    npm run preview

    ```


## Contributing

Contributions are welcome! If you have a suggestion or want to report a bug, please feel free to open an issue.

If you would like to contribute code, please follow these steps:

1.  **Fork** the repository.

2.  Create a new branch (`git checkout -b feature/your-feature-name`).

3.  Make your changes and **commit** them (`git commit -m 'Add some feature'`).

4.  **Push** to the branch (`git push origin feature/your-feature-name`).

5.  Open a **Pull Request**.


## License

This project is licensed under the GNU General Public License v3.0 or later. See the [LICENSE](https://www.gnu.org/licenses/gpl-3.0.html "null") file for more details.