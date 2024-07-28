import DisplayEditormodule from "@/modules/DisplayEditor.module";
import FooterLanguagesSelectmodule from "@/modules/FooterLanguagesSelect.module";
import Title from "@/components/Title";
import Img from '@/components/img'

export default function HomePage() {
  return (
    <main >
      <Title />
      {/*   <Img /> */}
      <div

        className='m-auto max-w-[95%]  md:max-w-[850px]'>
        <DisplayEditormodule />
        <FooterLanguagesSelectmodule />
      </div>
    </main>
  );
}
