export function GET() {
  try {
    return Response.json(
      {
        code: 200,
        message: "Successfully",
        description: "test ok",
        data: null,
      },
      { status: 200 }
    );
  } catch (error: unknown) {
    if (error instanceof Error) {
      return Response.json(
        {
          code: 500,
          message: error.name,
          description: error.message,
          data: null,
        },
        { status: 500 }
      );
    }
  }
}
