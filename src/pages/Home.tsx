import Button from "../components/common/Button";
import InputText from "../components/common/InputText";
import Title from "../components/common/Title";

const Home = () => {
  return (
    <div>
      <Title size="small">제목테스트</Title>
      <Button size="large" scheme="primary">
        버튼 테스트
      </Button>
      <InputText placeholder="여기 입력" />
    </div>
  );
};

export default Home;
