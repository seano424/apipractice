import { useRef } from "react";

export default function Form(props) {
  const nameRef = useRef();
  const emailRef = useRef();

  const formHandler = (event) => {
    event.preventDefault();
    const name = nameRef.current.value;
    const email = emailRef.current.value;
    const data = {
      name,
      email,
    };
    props.submitData(data)

  };

  return (
    <form onSubmit={formHandler}>
      <div>
        <input
          required
          type="text"
          placeholder="What's your name?"
          ref={nameRef}
        />
      </div>
      <div>
        <input
          required
          type="email"
          placeholder="What's your email?"
          ref={emailRef}
        />
      </div>
      <button>Sign In</button>
    </form>
  );
}
