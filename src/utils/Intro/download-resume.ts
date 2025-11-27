export const downloadResume = () => {
    const link = document.createElement('a');

    link.href = '/external_file/Edmyr_Batiancila_Resume.pdf';
    link.download = 'Edmyr_Batiancila_Resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
}