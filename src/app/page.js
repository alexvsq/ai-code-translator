import DisplayEditormodule from "@/modules/DisplayEditor.module";
import FooterLanguagesSelectmodule from "@/modules/FooterLanguagesSelect.module";
import Title from "@/components/Title";

export default function HomePage() {
  return (
    <main >
      <Title />
      <div className='m-auto max-w-[95%]  md:max-w-[850px]'>
        <DisplayEditormodule />
        <FooterLanguagesSelectmodule />
      </div>
    </main>
  );
}
