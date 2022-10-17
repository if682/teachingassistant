import AWS from 'aws-sdk';

const accessKeyID = 'AKIAXOJGECR3OITU2JGW'
const secretAccessKeyID = '1asl52VSyvw3fBe/pVzkTfAsd+wWdItDSqGsUzmk'
const BUCKET_NAME = 'projeto-ess-sharkmusic-bucket'

const credentials = new AWS.Credentials(accessKeyID, secretAccessKeyID)

const aws =  AWS.config.update({
    region: 'sa-east-1',
    credentials: credentials});
  
const s3 = new AWS.S3({apiVersion:'latest', params:{Bucket:BUCKET_NAME}})

export{
    s3
}