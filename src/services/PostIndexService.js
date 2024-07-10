class PostIndexService{

    async fetchAndParseLocalJson(filepath) {
        const response = await fetch(filepath);
        if (!response.ok) {
            throw new Error("Unable to fetch file");
        }
        const jsonData = await response.json();
        return jsonData;
    } catch (error) {
        console.error("Error fetching json:", error);
        throw error;
    }
    
}

export default PostIndexService;