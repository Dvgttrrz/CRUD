var uid, firstn, middlen, surn, emaila, address;

function readFom() {
  uid = document.getElementById("Uid").value;
  firstn = document.getElementById("fname").value;
  middlen = document.getElementById("mname").value;
  surn = document.getElementById("sname").value;
  emaila = document.getElementById("Eadd").value;
  address = document.getElementById("address").value;
  console.log(uid, firstn, middlen, surn, emaila, address);
}

document.getElementById("insert").onclick = function () {
  readFom();

  firebase
    .database()
    .ref("student/" + uid)
    .set({
      UniqueID: uid,
      FirstName: firstn,
      MiddleName: middlen,
      SurName: surn,
      EmailAddress: emaila,
      Address: address,
    });
  alert("Data Inserted");
  document.getElementById("Uid").value = "";
  document.getElementById("fname").value = "";
  document.getElementById("mname").value = "";
  document.getElementById("sname").value = "";
  document.getElementById("Eadd").value = "";
  document.getElementById("address").value = "";
};

document.getElementById("read").onclick = function () {
  readFom();

  firebase
    .database()
    .ref("student/" + uid)
    .on("value", function (snap) {
      document.getElementById("Uid").value = snap.val().UniqueID;
      document.getElementById("fname").value = snap.val().FirstName;
      document.getElementById("mname").value = snap.val().MiddleName;
      document.getElementById("sname").value = snap.val().SurName;
      document.getElementById("Eadd").value = snap.val().EmailAddress;
      document.getElementById("address").value = snap.val().Address;
    });
};

document.getElementById("update").onclick = function () {
  readFom();

  firebase
    .database()
    .ref("student/" + uid)
    .update({
      UniqueID: uid,
      FirstName: firstn,
      MiddleName: middlen,
      SurName: surn,
      EmailAddress: emaila,
      Address: address,
    });
  alert("Data Update");
  document.getElementById("Uid").value = "";
  document.getElementById("fname").value = "";
  document.getElementById("mname").value = "";
  document.getElementById("sname").value = "";
  document.getElementById("Eadd").value = "";
  document.getElementById("address").value = "";
};
document.getElementById("delete").onclick = function () {
  readFom();

  firebase
    .database()
    .ref("student/" + uid)
    .remove();
  alert("Data Deleted");
  document.getElementById("Uid").value = "";
  document.getElementById("fname").value = "";
  document.getElementById("mname").value = "";
  document.getElementById("sname").value = "";
  document.getElementById("Eadd").value = "";
  document.getElementById("address").value = "";
};
