import { forwardRef } from "react";
import ModernResume from "../../templates/ModernResume/ModernResume.jsx";
import ClassicResume from "../../templates/ClassicResume/ClassicResume.jsx";
import CreativeResume from "../../templates/CreativeResume/CreativeResume.jsx";
import "./ResumePreview.css";

const ResumePreview = forwardRef(({ data, style }, ref) => {
    switch (style) {
        case "modern":
            return <ModernResume ref={ref} data={data} />;
            
        case "classic":
            return <ClassicResume ref={ref} data={data} />;

        case "creative":
            return <CreativeResume ref={ref} data={data} />;
    }
});

export default ResumePreview;