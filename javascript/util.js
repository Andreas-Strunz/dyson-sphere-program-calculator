// Default directory path
const data_directory = "/data"
const schema_directory = "/data/schema"

async function loadJsonFile(filepath) {
    const response = await fetch(filepath);

    if(!response.ok) {
        throw new Error(`Failed to fetch ${filepath}: ${response.statusText}`)
    }

    return response.json();
}

export async function getValidatedJsonFile(file) {
    const [data, schema] = await Promise.all([
        loadJsonFile(data_directory + "/" + file),
        loadJsonFile(schema_directory + "/" + file)
    ]);

    return data;
}