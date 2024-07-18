import { useForm } from "@tanstack/react-form";
import { Database } from "./db-types";


export type CandidateRowType = Database["public"]["Tables"]["candidates"]["Row"];
export type CandidateInsertType = Database["public"]["Tables"]["candidates"]["Insert"];

// type CandidateInsertType = {
//   account_id?: string;
//   avatar_url?: string | null;
//   bio?: string | null;
//   created_at?: string;
//   embedding?: string | null;
//   gps?: unknown | null;
//   id?: number;
//   name: string;
//   period: string;
//   vibe_check?: Record<string, unknown>;
//   vying_for?: "mp" | "mca";
// };

// type CandidateRowType = {
//   account_id: string;
//   avatar_url: string | null;
//   bio: string | null;
//   created_at: string;
//   embedding: string | null;
//   gps: unknown | null;
//   id: number;
//   name: string;
//   period: string;
//   vibe_check?: Record<string, unknown>;
//   vying_for?: "mp" | "mca";
// };

interface TestTanstackFormProps {
  candidate?: CandidateRowType;
}

interface TestTanstackFormFields {
  name: string;
  email: string;
  password: string;
  passwordConfirm: string;
  username: string;
  code: string;
  backupEmail: string;
}

export function TestTanstackForm({ candidate }: TestTanstackFormProps) {
  const candidate_form = useForm<CandidateInsertType>({
    defaultValues: {
      name: "",
      period: "",
      vying_for: "mp",
    },
  });

  const form = useForm<TestTanstackFormFields>({
    defaultValues: {
      name: "",
      email: "",
      password: "",
      passwordConfirm: "",
      username: "",
      code: "",
      backupEmail: "",
    },
    onSubmit: async ({ value }) => {
      console.log("==================== reset password ==============", value);
    },
  });
  return (
    <div className="w-full h-full flex flex-col items-center justify-center">
      <form className="w-[90%] md:w-[60%] lg:w-[50%] h-full flex flex-col items-center justify-center p-[2%] bg-bg-muted rounded-md gap-4 ">
        <candidate_form.Field
          name="name"
          children={(field) => {
            return (
              <input
                id="name"
                onChange={(e) => field.handleChange(e.target.value)}
                onBlur={field.handleBlur}
              />
            );
          }}
        />
      </form>

      <form className="w-[90%] md:w-[60%] lg:w-[50%] h-full flex flex-col items-center justify-center p-[2%] bg-bg-muted rounded-md gap-4 ">
        <form.Field
          name="name"
          children={(field) => {
            return (
              <input
                id="name"
                onChange={(e) => field.handleChange(e.target.value)}
                onBlur={field.handleBlur}
              />
            );
          }}
        />
        <form.Field
          name="email"
          children={(field) => {
            return (
              <input
                id="name"
                onChange={(e) => field.handleChange(e.target.value)}
                onBlur={field.handleBlur}
              />
            );
          }}
        />
      </form>
    </div>
  );
}
