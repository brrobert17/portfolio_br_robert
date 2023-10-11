import 'firebase/firestore';
import {doc, getDoc} from 'firebase/firestore';
import {NextResponse} from "next/server";
import {db} from "@/app/config/firebaseConfig";



export async function GET(request: Request) {
    console.log("ttt")
    return Response.json({test: "test"})
}

