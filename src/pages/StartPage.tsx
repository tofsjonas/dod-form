import { createId } from "@paralleldrive/cuid2";
import { useNavigate } from "react-router-dom";

const StartPage = () => {
  const navigate = useNavigate();

  return (
    <>
      <h1>Create new DOD form</h1>
      <button
        onClick={() => {
          const id = createId();
          navigate(id);

          console.log(
            "🚀 COMMANDER ~ file: App.tsx ~ line ~ 14 ~ ",
            "aaaaaaaaaaa",
            createId()
          );
        }}
      >
        create new form
      </button>
    </>
  );
};
export default StartPage;
