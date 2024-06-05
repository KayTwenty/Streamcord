import { useMediaQuery } from "react-responsive";

// This hook will return the screen type of the user
const useScreenType = () => {
    // Check if the user is on a desktop or laptop
    const isDesktopOrLaptop = useMediaQuery({
        query: "(min-width: 1224px)",
    });

    // Check if the user is on a tablet device
    const isTablet = useMediaQuery({
        query: "(min-width: 768px) and (max-width: 1223px)",
    });

    // Check if the user is on a mobile device
    const isMobile = useMediaQuery({
        query: "(max-width: 767px)",
    });

    const isBigScreen = useMediaQuery({ query: "(min-width: 1824px)" });
    const isPortrait = useMediaQuery({ query: "(orientation: portrait)" });
    const isRetina = useMediaQuery({ query: "(min-resolution: 2dppx)" });

    if (isBigScreen) {
        return "isBigScreen";
    } else if (isDesktopOrLaptop) {
        return "isDesktop";
    } else if (isTablet) {
        return "isTablet";
    } else if (isMobile) {
        return "isMobile";
    } else if (isPortrait) {
        return "isPortrait";
    } else {
        return "isRetina";
    }
};

export default useScreenType;