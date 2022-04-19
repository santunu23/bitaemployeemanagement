import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { AngularFirestore } from '@angular/fire/firestore';
import { AngularFireStorage } from '@angular/fire/storage';
@Injectable({
  providedIn: 'root'
})
export class FirebaseService {

  constructor(
    public db: AngularFirestore, 
    private asstorage:AngularFireStorage,
    private router:Router) { }

    senduserfeedback(value){
      return this.db.collection('/senuserfeedback').add({
         name: value.fullname,
         uname:value.uname.toLowerCase(),
         upass:value.pword
     });
     }

  createUser(value){
   return this.db.collection('/Adminuser').add({
      name: value.fullname,
      uname:value.uname.toLowerCase(),
      upass:value.pword
  });
  }
  fullname

email
designation
appointmentletter
certificates
cv
bankinfo 
contactno
joindate
resigndate 
created_at 
emoloyeeid 
randomId
remarks
url
signurl

  updateoshrhcemployeemember(res){
   return this.db.collection('createoshrhcemployeemember').doc(res.id).update({
     "fullname":res.fullname,
     "address":res.address,
     "email":res.email,
     "designation":res.designation,
     "appointmentletter":res.appointmentletter,
     "certificates":res.certificates,
     "cv":res.cv,
     "bankinfo":res.bankinfo,
     "contactno":res.contactno,
     "joindate":res.joindate,
     "resigndate":res.resigndate,
     "emoloyeeid":res.employeeid
    });
  }
  deleteadminuser(item){
    this.db.doc('Adminuser/'+item).delete();
  }
  getalladminuserdata(){
    return this.db.collection('Adminuser').snapshotChanges();
  }
  getallcollectiondata(){
    return this.db.collection('createoshrhcemployeemember').snapshotChanges();
  }
  getselecteduserdata(item){
    return this.db.collection('createemployeemember',ref=> ref.where('randomId','==',item))
    .snapshotChanges()
  }
  getupdateuserdata(){
    return this.db.collection('createoshrhcemployeemember').snapshotChanges()
  }
searchadminusernamevalue(res){
  return this.db.collection('Adminuser',ref=> ref.where('uname','==',res.uname.toLowerCase()))
  .snapshotChanges()
}
searchmemberbyrandomid(res){
  return this.db.collection('createemployeemember',ref=> ref.where('randomId','==',res))
  .snapshotChanges()
}

searchmemberbyrandomidoshrhc(res){
  return this.db.collection('createoshrhcemployeemember',ref=> ref.where('randomId','==',res))
  .snapshotChanges()
}
searchmemberbynameoshrhc(res){
  return this.db.collection('createoshrhcemployeemember',ref=> ref.where('designation','==',res))
  .snapshotChanges()
}
searchoshrhcbymemberid(id){
  return this.db.collection('createoshrhcemployeemember').doc(id).snapshotChanges();
}
updateoshrhcmemberdata(raf){
  return this.db.collection("createoshrhcemployeemember").doc(raf.id).update({
    "fullname":raf.fullname,
    "employeeid":raf.employeeid,
    "designation":raf.designation,
    "address":raf.address,
    "contactno":raf.contactno,
    "joindate":raf.joindate,
    "resigndate":raf.resigndate,
    "email":raf.email,
    "bankinfo":raf.bankinfo,
    "certificates":raf.submitcertificates,
    "cv":raf.submitcv,
    "nid":raf.submitnid,
    "appointmentletter":raf.submitappointmentletter,
    "remarks":raf.remarks,
    "signurl":raf.sigurl
});
}

updatememberdata(raf){
  return this.db.collection("createemployeemember").doc(raf.id).update({
    "fullname":raf.fullname,
    "employeeid":raf.employeeid,
    "designation":raf.designation,
    "address":raf.address,
    "contactno":raf.contactno,
    "joindate":raf.joindate,
    "resigndate":raf.resigndate,
    "email":raf.email,
    "bankinfo":raf.bankinfo,
    "certificates":raf.submitcertificates,
    "cv":raf.submitcv,
    "nid":raf.submitnid,
    "appointmentletter":raf.submitappointmentletter,
    "remarks":raf.remarks,
    "signurl":raf.sigurl
});
}
updateoshrchmemberdata(raf){
  return this.db.collection("createoshrhcemployeemember").doc(raf.id).update({
    "fullname":raf.fullname,
    "employeeid":raf.employeeid,
    "designation":raf.designation,
    "address":raf.address,
    "contactno":raf.contactno,
    "joindate":raf.joindate,
    "resigndate":raf.resigndate,
    "email":raf.email,
    "bankinfo":raf.bankinfo,
    "certificates":raf.submitcertificates,
    "cv":raf.submitcv,
    "nid":raf.submitnid,
    "appointmentletter":raf.submitappointmentletter,
    "remarks":raf.remarks,
    "signurl":raf.sigurl
});
}
downloadcsvalldata(){
  return this.db.collection('createemployeemember').snapshotChanges();
}
downloadoshrchcsvalldata(){
  return this.db.collection('createoshrhcemployeemember').snapshotChanges();
}
getallemployeedata(){
  return this.db.collection('createemployeemember').snapshotChanges();
}

getselecteduserdataoshrhc(item){
  return this.db.collection('createoshrhcemployeemember',ref=> ref.where('randomId','==',item))
    .snapshotChanges()
}

getallemployeedatafromoshrhc(){
  return this.db.collection('createoshrhcemployeemember').snapshotChanges();
}

deletepicture(randomId){
  this.asstorage.ref(randomId+"signatureimage").delete();

}
deleteEvent(itemid,randomId){
  this.db.doc('createemployeemember/'+itemid).delete();
  this.asstorage.ref(randomId).delete();
  this.asstorage.ref(randomId+"signatureimage").delete();
  this.router.navigateByUrl("dashboard");
}
deleteoshrhcEvent(itemid,randomId){
  this.db.doc('createoshrhcemployeemember/'+itemid).delete();
  this.asstorage.ref(randomId).delete();
  this.asstorage.ref(randomId+"signatureimage").delete();
}
createemployeemember(value){
  return this.db.collection('/createemployeemember').add({
    fullname:value.fullname,
    randomId:value.randomId,
    created_at:value.created_at,
    url:value.url,
    signurl:value.sigurl,
    employeeid:value.employeeid,
    designation:value.designation,
    address:value.address,
    bankinfo:value.bankinfo,
    contactno:value.contactno,
    joindate:value.joindate,
    resigndate:value.resigndate,
    email:value.email,
    remarks:value.remarks,
    certificates:value.certificates,
    appointmentletter:value.appointmentletter,
    cv:value.cv,
    nid:value.nid
})
}


createoshrhcemployeemember(value){
  return this.db.collection('/createoshrhcemployeemember').add({
    fullname:value.fullname,
    randomId:value.randomId,
    created_at:value.created_at,
    url:value.url,
    signurl:value.sigurl,
    employeeid:value.employeeid,
    designation:value.designation,
    address:value.address,
    bankinfo:value.bankinfo,
    contactno:value.contactno,
    joindate:value.joindate,
    resigndate:value.resigndate,
    email:value.email,
    remarks:value.remarks,
    certificates:value.certificates,
    appointmentletter:value.appointmentletter,
    cv:value.cv,
    nid:value.nid
})
}
  serachadminuser(res){
    return this.db.collection('Adminuser',ref=> ref.where('uname','==',res.uname)
    .where('upass','==',res.pword))
    .snapshotChanges()
  }
}
