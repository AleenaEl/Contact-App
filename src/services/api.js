export const fetchContacts = async () => {
    try {
        await new Promise((resolve) => setTimeout(resolve, 1000));
        const response = await fetch('https://jsonplaceholder.typicode.com/users');
        if (!response.ok) {
            throw new Error("Failed to fetch contact details");
        }
        return response.json();
    } catch (error) {
        console.error("Error fetching contact data", error);
        throw error;
    }
}