"use client";

export function RedirectForm({
  action,
}: {
  action: (formData: FormData) => Promise<void>;
}) {
  return (
    <div>
      <form action={action} id="redirectForm">
        <input type="hidden" name="foo" value="bar" />
        <button
          type="submit"
          form="redirectForm"
          className="w-auto flex justify-center items-center text-center gap-x-1.5 rounded-md bg-green-600 px-2.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-green-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green-600"
        >
          Redirect Me
        </button>
      </form>
    </div>
  );
}
