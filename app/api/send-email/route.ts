export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, project, message } = body;

    // Validate required fields
    if (!name || !email || !message) {
      return Response.json(
        { error: "Missing required fields" },
        { status: 400 }
      );
    }

    // Forward to Formspree
    const formspreeResponse = await fetch(
      `https://formspree.io/f/${process.env.NEXT_PUBLIC_FORMSPREE_ID}`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name,
          email,
          project: project || "Not specified",
          message,
        }),
      }
    );

    if (!formspreeResponse.ok) {
      console.error("Formspree error:", formspreeResponse.statusText);
      return Response.json(
        { error: "Failed to send email" },
        { status: 500 }
      );
    }

    return Response.json(
      { success: true, message: "Email sent successfully" },
      { status: 200 }
    );
  } catch (error) {
    console.error("API error:", error);
    return Response.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}
