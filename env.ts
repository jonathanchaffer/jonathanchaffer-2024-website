import z from "zod";

// Define the schema for the environment variables, validating them and updating
// the global process.env type to include the validated values.

const envSchema = z.object({
  NODE_ENV: z.enum(["development", "production", "test"]),
  RESEND_API_KEY: z.string(),
});

envSchema.parse(process.env);

declare global {
  // eslint-disable-next-line @typescript-eslint/no-namespace
  namespace NodeJS {
    interface ProcessEnv extends z.infer<typeof envSchema> {}
  }
}

export const env = process.env;
