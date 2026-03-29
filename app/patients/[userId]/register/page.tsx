import Image from "next/image";
import { redirect } from "next/navigation";

import RegisterForm from "@/components/forms/RegisterForm";
import { getPatient, getUser } from "@/lib/actions/patient.actions";

const Register = async ({ params: { userId } }: SearchParamProps) => {
  const user = await getUser(userId);
  const patient = await getPatient(userId);

  if (patient) redirect(`/patients/${userId}/new-appointment`);

  return (
    <div className="flex h-screen max-h-screen">
      <section className="remove-scrollbar container">
        <div className="sub-container max-w-[860px] flex-1 flex-col py-10">
          <Image
            src="/assets/icons/logo1.png"
            height={2000}
            width={2000}
            alt="patient"
            className="mb-12 h-80 w-fit"
          />

          <RegisterForm user={user} />

          <p className="copyright py-12">© 2025 MediLifeCare</p>
        </div>
      </section>

      <Image
        src="/assets/images/register-img.png"
        height={1500}
        width={1500}
        alt="patient"
        className="side-img max-w-[390px]"
      />
    </div>
  );
};

export default Register;
