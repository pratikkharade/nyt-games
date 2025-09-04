import React from "react";
import './UrlRenderer.css';

export default function UrlRenderer({ url, width = "100%", height = "100%" }) {
    return (
        <div className="url-renderer">
            <iframe
                src={url}
                width={width}
                height={height}
                style={{ border: "1px solid #ccc", borderRadius: "6px" }}
                title="Embedded URL"
            ></iframe>
        </div>
    );
}