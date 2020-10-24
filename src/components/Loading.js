import React from "react";
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";

export default function Loading({
    color = "var(--blue-2-2)",
    highlightColor = "var(--blue-1)",
    width = 100,
    height,
    style = {},
    duration = 1.2,
}) {
    return (
        <SkeletonTheme color={color} highlightColor={highlightColor}>
            <Skeleton
                duration={duration}
                width={width}
                height={height}
                style={style}
            />
        </SkeletonTheme>
    );
}
