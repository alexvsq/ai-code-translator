import DisplayEditormodule from "@/modules/DisplayEditor.module";
import FooterLanguagesSelectmodule from "@/modules/FooterLanguagesSelect.module";

export default function Home() {

  return (
    <main className='m-auto max-w-[95%]  md:max-w-[850px]'>
      <DisplayEditormodule />
      <FooterLanguagesSelectmodule />
    </main>
  );
}
