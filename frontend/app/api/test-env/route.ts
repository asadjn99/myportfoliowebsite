export async function GET() {
  const emailUser = process.env.EMAIL_USER
  const emailPass = process.env.EMAIL_PASS
  
  return Response.json({
    EMAIL_USER_SET: !!emailUser,
    EMAIL_PASS_SET: !!emailPass,
    EMAIL_USER: emailUser || "NOT FOUND",
    EMAIL_PASS: emailPass ? "✓ Found" : "NOT FOUND",
  })
}