import PageMeta from "../../components/common/PageMeta";
import AuthLayout from "./AuthPageLayout";
import SignInForm from "../../components/auth/SignInForm";

export default function SignIn() {
  return (
    <>
      <PageMeta
        title="React.js Dashboard | Ganesh Aihello"
        description="React.js Dashboard | Ganesh Aihello"
      />
      <AuthLayout>
        <SignInForm />
      </AuthLayout>
    </>
  );
}
