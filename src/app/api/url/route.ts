import { NextRequest,NextResponse } from "next/server";
import dbConnect from "@/lib/dbConnect";
import URLModel , { URLInterface } from "@/models/urls.model";
//import {redisClient} from "@/lib/redisConnect"


export interface HashMap {
    [key: string] : string;
} 
let map : HashMap = {};

export async function POST(request : NextRequest , response : NextResponse){
    try {
        const body = await request.json();

        const value = body.value as string;
        const key = Math.random().toString(36).slice(2).substring(5);
        const expiryDate = new Date();
        expiryDate.setDate(expiryDate.getDate()+1);

        await dbConnect();
        const URLobj = new URLModel<URLInterface>({
            key:key,
            value:value
        });
        await URLobj.save();
        
        return NextResponse.json({message:"Success","URL":URLobj},{status:200});
    } catch (error) {
        console.error(error)
        return NextResponse.json({message:"Failure"},{status:500});
    }
}

export async function GET(request : NextRequest , response : NextResponse){
    try {
            
        const { searchParams } = new URL(request.url);
        const key = searchParams.get('key') as string | "";

        let value = map[key];
        if(value){
            return NextResponse.json({message:"Success",source:"HashMap",value:value},{status:200});
        }

        // try{
        //     value = await redisClient.get(key as string) as string;
        // }catch(err){
        //     console.error(err);
        // }
        
        if(value){
            if(parseInt(map.size)>100000)map = {};
            map[key] = value;
            return NextResponse.json({message:"Success",source:"Redis",value:value},{status:200});
        }

        await dbConnect();
        const DBObj: URLInterface|null = await URLModel.findOne({key:key})  ;
        if(DBObj){
           // await redisClient.set(key,DBObj.value,'EX',60*60);
            return NextResponse.json({message:"Success",source:"MongoDB",value:DBObj.value},{status:200});
        } 

        return NextResponse.json({message:"Could not Fetch the requested key"},{status:404});

    } catch (error) {
        console.error(error)
        return NextResponse.json({message:"Failure"},{status:500});
    }
}

export async function DELETE(request : NextRequest , response : NextResponse){
    try {
        const { searchParams } = new URL(request.url);
        const key = searchParams.get('key') as string | "";

        delete map[key];
        
        // try{
        //     await redisClient.del(key);
        // }catch(err){
        //     console.error(err);
        // }
        
        await dbConnect();
        const DBObj: URLInterface|null = await URLModel.findOneAndDelete({key:key});

        if(DBObj){
            return  NextResponse.json({message:"Success", "Deleted URL" : DBObj},{status:200});
        }

        return NextResponse.json({message:"Could not Fetch the requested key"},{status:404});
    } catch (error) {
        console.error(error)
        return NextResponse.json({message:"Failure"},{status:500});
    }

}