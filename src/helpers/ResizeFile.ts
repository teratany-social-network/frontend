import Resizer from 'react-image-file-resizer';


export const ResizeFile = (file: any, cb: any) => {

    Resizer.imageFileResizer(
        file,
        600,
        400,
        'jpg',
        50,
        0,
        (resizedImage: any) => {
            cb(resizedImage)
        },
        'base64'
    );

}