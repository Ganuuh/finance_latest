import { Container } from "@/components/Container";
import { Loading } from "@/components/LoadingPage";
import { SecondStep } from "@/components/SecondStep";
export default function Home() {
  let isLoading = false;
  return <Container>{isLoading ? <Loading /> : <SecondStep />}</Container>;
}
