export async function parseResume(file: File) {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    
    reader.onload = async (e) => {
      try {
        if (!e.target?.result) {
          throw new Error("Failed to read file");
        }
        
        // For PDF files
        if (file.type === 'application/pdf') {
          const pdf = await import('pdfjs-dist');
          const data = new Uint8Array(e.target.result as ArrayBuffer);
          const doc = await pdf.getDocument(data).promise;
          
          let text = '';
          for (let i = 1; i <= doc.numPages; i++) {
            const page = await doc.getPage(i);
            const content = await page.getTextContent();
            text += content.items.map((item: any) => item.str).join(' ');
          }
          
          resolve(extractInformation(text));
        }
        // For DOC/DOCX files
        else {
          const mammoth = await import('mammoth');
          const result = await mammoth.extractRawText({
            arrayBuffer: e.target.result as ArrayBuffer
          });
          resolve(extractInformation(result.value));
        }
      } catch (error) {
        reject(error);
      }
    };
    
    reader.onerror = () => reject(new Error("Failed to read file"));
    
    if (file.type === 'application/pdf') {
      reader.readAsArrayBuffer(file);
    } else {
      reader.readAsArrayBuffer(file);
    }
  });
}

function extractInformation(text: string) {
  // Simple regex-based extraction
  const extractedData = {
    name: '',
    email: '',
    phone: '',
    experience: [],
    education: []
  };
  
  // Extract email
  const emailRegex = /[\w.-]+@[\w.-]+\.\w+/;
  const emailMatch = text.match(emailRegex);
  if (emailMatch) {
    extractedData.email = emailMatch[0];
  }
  
  // Extract phone
  const phoneRegex = /(\+\d{1,2}\s?)?\(?\d{3}\)?[\s.-]?\d{3}[\s.-]?\d{4}/;
  const phoneMatch = text.match(phoneRegex);
  if (phoneMatch) {
    extractedData.phone = phoneMatch[0];
  }
  
  // Basic name extraction (assumes name is at start)
  const lines = text.split('\n');
  if (lines[0] && !lines[0].includes('@') && !phoneRegex.test(lines[0])) {
    extractedData.name = lines[0].trim();
  }
  
  return extractedData;
}
