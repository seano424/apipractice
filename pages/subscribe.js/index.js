import styles from "../../styles/Home.module.css";
import Form from "../../components/form";
import { useRouter } from "next/router";

export default function Signin() {
  const router = useRouter();

  const handleSubmittedData = (data) => {
    fetch("api/newsletter", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        // 'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((data) => console.log(data));
    router.push("/");
  };

  return (
    <div className={styles.container}>
      <Form submitData={handleSubmittedData} />
    </div>
  );
}
