import React from "react"
import ContentLoader from "react-content-loader"

export const MyLoader = () => (
    <div className="content-loader">
        <ContentLoader 
            speed={2}
            width={150}
            height={187}
            viewBox="0 0 150 187"
            backgroundColor="#f3f3f3"
            foregroundColor="#ecebeb"
        >
            <rect x="0" y="0" rx="0" ry="0" width="150" height="91" /> 
            <rect x="0" y="110" rx="0" ry="0" width="150" height="15" /> 
            <rect x="0" y="131" rx="0" ry="0" width="93" height="15" /> 
            <rect x="0" y="165" rx="0" ry="0" width="80" height="24" /> 
            <rect x="114" y="159" rx="0" ry="0" width="32" height="32" />
        </ContentLoader>
    </div>
)