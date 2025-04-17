export const Logo = ({
    className,
    style,
}: { className?: string; style?: React.CSSProperties }): React.JSX.Element | null => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        xmlSpace="preserve"
        id="Layer_1"
        x="0"
        y="0"
        version="1.1"
        viewBox="0 0 436.6 180.9"
        width="100%" height="100%"
        className={className}
        style={style}
    >
        <path
            fill="#FFF"
            d="M4 58.5h30.8v119H4zM313.5 55.3c-36.1 0-63.3 27-63.3 62.8s27.2 62.8 63.3 62.8 63.3-27 63.3-62.8-27.2-62.8-63.3-62.8m33.4 62.8c0 19.1-14.4 33.4-33.4 33.4-19.1 0-33.4-14.4-33.4-33.4 0-19.1 14.4-33.4 33.4-33.4 19.1 0 33.4 14.3 33.4 33.4"
        ></path>
    </svg>
);

export default Logo;
