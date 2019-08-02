
export class Product {

  

    constructor(public _productName?: string,
        public _productDisc?: string,
        public _productPrice?: string,
        public _productQuantity?: string,
        public _productColor?: string,
        public _idClientOwner?: string,
        public _productPic?: string) { }


        get productName(){return this._productName;}
        set productName(productName:string){this._productName=productName;}

        
        get productDisc(){return this._productDisc;}
        set productDisc(productDisc:string){this._productDisc=productDisc;}

        
        get productPrice(){return this._productPrice;}
        set productPrice(productPrice:string){this._productPrice=productPrice;}

        
        get productQuantity(){return this._productQuantity;}
        set productQuantity(productQuantity:string){this._productQuantity=productQuantity;}

        
        get productPic(){return this._productPic;}
        set productPic(productPic:string){this._productPic=productPic;}


        get productColor(){return this._productColor;}
        set productColor(productColor:string){this._productColor=productColor;}

        
        get idSeller(){return this._idClientOwner;}
        set idSeller(idClientOwner:string){this._idClientOwner=idClientOwner;}


}