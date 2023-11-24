import { Fade } from "react-awesome-reveal";
import DetailsSection from "./DetailsSection";
import MapSection from "./MapSection";
import TellUsSection from "./TellUsSection";
import FormSection from "./FormSection";

export default function Contact() {
  return (
    <article className="flex gap-48 flex-col">
    <Fade>
      <TellUsSection/>
      <DetailsSection/>
      <MapSection/>
      <FormSection/>
    </Fade>
    </article>
  )
}
