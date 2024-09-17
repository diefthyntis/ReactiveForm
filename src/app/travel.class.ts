export class Travel {


    location!:string;
    description!:string;
    imageUrl!:string;
    title!:string;
    creationDate!:Date;
    topic!:string;

  
    
  
      constructor( location: string,
         description: string,
         imageUrl: string,
         title: string,
         topic:string
      ) {
        this.location= location;
        this.description = description;
        this.imageUrl = imageUrl;
        this.title = title;
        this.topic= topic;
      }
}