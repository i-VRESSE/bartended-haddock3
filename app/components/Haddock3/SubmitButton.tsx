import {
  useCatalog,
  useFiles,
  useWorkflow,
} from "@i-vresse/wb-core/dist/store";
import { catalog2tomlSchemas } from "@i-vresse/wb-core/dist/toml";
import { createZip } from "@i-vresse/wb-core/dist/archive";
import { useSubmit } from "@remix-run/react";

export const WorkflowSubmitButton = (): JSX.Element => {
  const submit = useSubmit();
  const { nodes, global } = useWorkflow();
  const files = useFiles();
  const catalog = useCatalog();

  const submitworkflow = async (): Promise<void> => {
    const tomlSchemas = catalog2tomlSchemas(catalog);
    const zip: Blob = await createZip(nodes, global, files, tomlSchemas);
    const formData = new FormData();
    formData.set("upload", zip);

    submit(formData, { method: "post", encType: "multipart/form-data" });
  };

  return (
    <button className="btn btn-primary" onClick={submitworkflow}>
      Submit
    </button>
  );
};
