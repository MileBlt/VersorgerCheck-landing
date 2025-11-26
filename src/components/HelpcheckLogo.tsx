import React from "react";

export const HelpcheckLogo = ({ className }: { className?: string }) => {
    return (
        <img
            src="/logo-schwarz+akte 1.png"
            alt="helpcheck"
            className={`h-6 w-auto ${className || ''}`}
        />
    );
};
