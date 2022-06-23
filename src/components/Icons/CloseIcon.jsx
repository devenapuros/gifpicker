import { SvgIcon } from "../../styles/SvgIcon";

export const CloseIcon = ({ color, size }) => {
    return (
        <SvgIcon
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            color={color}
            size={size}
        >
            <path d="m16.192 6.344-4.243 4.242-4.242-4.242-1.414 1.414L10.535 12l-4.242 4.242 1.414 1.414 4.242-4.242 4.243 4.242 1.414-1.414L13.364 12l4.242-4.242z"></path>
        </SvgIcon>
    );
};
