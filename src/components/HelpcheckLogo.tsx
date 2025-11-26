import React from "react";

export const HelpcheckLogo = ({ className }: { className?: string }) => {
    return (
        <svg
            width="113"
            height="18"
            viewBox="0 0 113 18"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            xmlnsXlink="http://www.w3.org/1999/xlink"
            className={className}
        >
            <rect width="113" height="18" fill="url(#pattern0_4_42)" />
            <defs>
                <pattern
                    id="pattern0_4_42"
                    patternContentUnits="objectBoundingBox"
                    width="1"
                    height="1"
                >
                    <use
                        xlinkHref="#image0_4_42"
                        transform="matrix(0.00641026 0 0 0.0402422 0 -0.0432692)"
                    />
                </pattern>
                <image
                    id="image0_4_42"
                    width="156"
                    height="27"
                    preserveAspectRatio="none"
                    xlinkHref="data:image/png;base64,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"
                />
            </defs>
        </svg>
    );
};
