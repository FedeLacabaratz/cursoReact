

export const fileUpload = async (file) => {
    const cloudUrl = 'https://api.cloudinary.com/v1_1/dibt8j7f5/image/upload'; // URL (endpoint) de donde tengo que enviar las imagenes 

    const formData = new FormData();
    formData.append('upload_preset', 'react-journal');
    formData.append('file', file);
    try {
        const resp = await fetch(cloudUrl, {
            method: 'POST',
            body: formData
        });

        if(resp.ok) {
            const cloudResp = await resp.json();
            return cloudResp.secure_url;
        } else {
            throw await resp.json();
        }
    } catch (error) {
        throw error;
    }
};