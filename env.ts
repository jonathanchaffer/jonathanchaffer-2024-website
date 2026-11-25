import { z, type infer as Infer } from "zod";

// Define the schema for the environment variables, validating them and updating
// the global process.env type to include the validated values.

const envSchema = z.object({
  NODE_ENV: z.enum(["development", "production", "test"]),
});

envSchema.parse(process.env);

declare global {
  // eslint-disable-next-line @typescript-eslint/no-namespace
  namespace NodeJS {
    interface ProcessEnv {
      NODE_ENV: Infer<typeof envSchema>["NODE_ENV"];
    }
  }
}

export const env = process.env;
