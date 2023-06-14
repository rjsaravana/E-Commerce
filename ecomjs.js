
window.onload = function exampleFunction() {
  getuserdata()
}

function btn2() {
  document.getElementById("formreset").reset();
}

function check_cp() {
  document.getElementsByClassName('cp')[0].addEventListener("keyup", function (e) {
    if (e.target.value > 100) {
      this.value = "";
      alert('Please enter less than 100')
    } else if (e.target.value <= -1) {
      this.value = "";
    }
  });

}

function myFunction() {
  var name = document.getElementById("name").value;
  var email = document.getElementById("email").value;
  var phone = document.getElementById("phone").value;
  var website = document.getElementById("website").value;
  var contactname = document.getElementById("contactname").value;
  var contctphone = document.getElementById("contctphone").value;
  var contctemail = document.getElementById("contctemail").value;
  var date = document.getElementById("myDate").value;
  var cp = document.getElementById("cp").value;
  var notes = document.getElementById("notes").value;
  var yes = document.getElementById("ca").value;



  // var user= localStorage.setItem("name", name);    
  // var emailid = localStorage.setItem("email", email);    
  // var phoneno = localStorage.setItem("phone", phone);    
  // var websites = localStorage.setItem("website", website);    
  // var contname = localStorage.setItem("contactname", contactname);    
  // var contphone = localStorage.setItem("contctphone", contctphone);    
  // var contemail = localStorage.setItem("contctemail", contctemail);    
  // var datee = localStorage.setItem("Date", date);    
  // var comper = localStorage.setItem("cp", cp);    
  // var note = localStorage.setItem("notes", notes);  
  // var yesca= localStorage.setItem("Ca", yes);


  var ele = document.getElementsByName('type');
  var values = [];
  for (i = 0; i < ele.length; i++) {
    if (ele[i].checked) {

      values.push(ele[i].value)
    }
  }
  // var radi= localStorage.setItem("radi", values);

  // function dataSelect() 
  // {

  var selected = [];
  for (var option of document.getElementById('epurcate').options) {
    if (option.selected) {
      selected.push(option.value);
    }
  }
  // var sele= localStorage.setItem("selected", selected);
  // }        


  // var checkBoxes = itemForm.querySelectorAll('input[name="checkbox_nm[]"]'); 
  var checkBoxes = document.getElementsByName('checkbox_nm[]');
  let result = [];
  checkBoxes.forEach(item => {
    if (item.checked) {
      result.push(item.value);
    }
  })

  // var caCheckbox = document.getElementsByName('ca[]');
  // let yes = [];
  //        caCheckbox.forEach(item => { 
  //         if (item.checked) {  
  //           yes.push(item.value); 
  //         }
  //         else
  //         {
  //           document.getElementById("ca_error").innerHTML 
  //                 = "You have not selected Critical Account"; 
  //         }
  //     })


  // var res= localStorage.setItem("check", result);        

  const person = {
    name: name,
    email: email,
    phone: phone,
    website: website,
    contactname: contactname,
    contctphone: contctphone,
    contctemail: contctemail,
    selected: selected,
    values: values,
    date: date,
    cp: cp,
    notes: notes,
    yes: yes,
    result: result,
  }


  // var name = document.getElementById('name').value;
  // if(!name){
  //     var varName = "Please enter Name";
  //       document.getElementById("name_error").innerHTML = varName;
  //       return true;
  // }else{
  //     document.getElementById("name_error").innerHTML = "";
  // }


  // var regEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  // var email = document.getElementById('email').value;
  // if(!regEmail.test(email)){
  //     var varName = "Please enter Email";
  //       document.getElementById("email_error").innerHTML = varName;
  //       return true;
  // }else{   
  //     document.getElementById("email_error").innerHTML = "";
  // }

  // var regPhone =  /^(\d{3})[- ]?(\d{3})[- ]?(\d{4})$/;
  // var phone = document.getElementById('phone').value;
  // if(!regPhone.test(phone)){
  //     var varName = "Please enter PhoneNo";
  //       document.getElementById("phonenum_error").innerHTML = varName;
  //       return true;
  // }else{
  //     document.getElementById("phonenum_error").innerHTML = "";
  // }

  // var regWebsite= /(\w+:?\w*)?(\S+)(:\d+)?(\/|\/([\w#!:.?+=&%!\-\/]))?/; 
  // var website = document.getElementById('website').value;
  // if(!regWebsite.test(website)){
  //     var varName = "Please enter Website";
  //       document.getElementById("web_error").innerHTML = varName;
  //       return true;
  // }else{
  //     document.getElementById("web_error").innerHTML = "";
  // }

  // var contactname = document.getElementById('contactname').value;
  // if(!contactname){
  //     var varName = "Please enter ContactName";
  //       document.getElementById("contname_error").innerHTML = varName;
  //       return true;
  // }else{
  //     document.getElementById("contname_error").innerHTML = "";
  // }


  // var regContctphone =  /^(\d{3})[- ]?(\d{3})[- ]?(\d{4})$/;
  // var contctphone = document.getElementById('contctphone').value;
  // if(!regContctphone.test(contctphone)){
  //     var varName = "Please enter ContctPhone";
  //       document.getElementById("contno_error").innerHTML = varName;
  //       return true;
  // }else{
  //     document.getElementById("contno_error").innerHTML = "";
  // }


  // var regContctemail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  // var contctemail = document.getElementById('contctemail').value;
  // if(!regContctemail.test(contctemail)){
  //     var varName = "Please enter ContctEmail";
  //       document.getElementById("contmail_error").innerHTML = varName;
  //       return true;
  // }else{   
  //     document.getElementById("contmail_error").innerHTML = "";
  // }

  // var selected = document.getElementById('epurcate').value;
  // if(!selected){
  //     var varName = "Please select Category";
  //       document.getElementById("cate_error").innerHTML = varName;
  //       return true;
  // }else{   
  //     document.getElementById("cate_error").innerHTML = "";
  // }

  // var values = document.getElementByName("type").value;
  // if(!values){
  //     var varName = "Please select Type";
  //       document.getElementById("type_error").innerHTML = varName;
  //       return true;
  // }else{   
  //     document.getElementById("type_error").innerHTML = "";
  // }

  // var date = document.getElementById('myDate').value;
  // if(!date){
  //     var varName = "Please select Date";
  //       document.getElementById("adate_error").innerHTML = varName;
  //       return true;
  // }else{   
  //     document.getElementById("adate_error").innerHTML = "";
  // }

  var comper = document.getElementById('cp').value;
  if (!cp) {
    var varName = "Please enter ComissionPercentage";
    document.getElementById("comper_error").innerHTML = varName;
    return true;
  } else {
    document.getElementById("comper_error").innerHTML = "";
  }

  // var notes = document.getElementById('notes').value;
  // if(!notes){
  //     var varName = "Please enter Notes";
  //       document.getElementById("note_error").innerHTML = varName;
  //       return true;
  // }else{   
  //     document.getElementById("note_error").innerHTML = "";
  // }

  // var yes = document.getElementById('ca').value;
  // if(!yes){
  //     var varName = "Please check the CriticalAccount";
  //       document.getElementById("ca_error").innerHTML = varName;
  //       return true;
  // }else{   
  //     document.getElementById("ca_error").innerHTML = "";
  // }

  // var checkpay = document.getElementsByClassName('checkbox_id').value;    
  // if(!checkpay){
  //     var varName = "Please check the CriticalAccount";
  //       document.getElementById("pay_error").innerHTML = varName;
  //       return true;
  // }else{   
  //     document.getElementById("pay_error").innerHTML = "";
  // }


  const oldDataStringInForm = localStorage.getItem('users');
  const oldData = JSON.parse(oldDataStringInForm) || []

    let contactnumbercheck = oldData.findIndex(x => x.phone === person.phone);
  let contactemailcheck = oldData.findIndex(x => x.email === person.email);

  var checkPhone = oldData.find(function (el) {
    return el.phone === person.phone || null;
  }
  );

  console.log(checkPhone)
  // if (checkPhone) {
  //   alert("Your phone number already exists")
  //   return
  // }

  var checkEmail = oldData.find(function (el) {
    return el.email === person.email || null;
  }
  );

  console.log(checkEmail)
  // if (checkEmail) {
  //   alert("Your email id already exists")
  //   return
  // }


  if (contactnumbercheck === -1) {
    localStorage.setItem('users', JSON.stringify([person, ...oldData]));
    alert("Business Created Successfully");
  } else {
    oldData[contactnumbercheck] = person
    localStorage.setItem('users', JSON.stringify(oldData));
    alert("Business Updated Successfully");
  }
  //   localStorage.setItem('users', JSON.stringify([person,...oldData]));

  btn2()
  getuserdata()

}


function getuserdata() {
  const updateDatasInStringForm = localStorage.getItem('users');
  const user = JSON.parse(updateDatasInStringForm)
  // if(!user?.length) return 

  var html = "<table border='1|1'>";
  for (var i = 0; i < user.length; i++) {
    html += "<tr>";
    html += "<td>" + (i + 1) + "</td>";
    html += "<td>" + user[i].name + "</td>";
    html += "<td>" + user[i].email + "</td>";
    html += "<td>" + user[i].phone + "</td>";
    html += "<td>" + user[i].website + "</td>";
    html += "<td>" + user[i].contactname + "</td>";
    html += "<td>" + user[i].contctphone + "</td>";
    html += "<td>" + user[i].contctemail + "</td>";
    html += "<td>" + user[i].selected + "</td>";
    html += "<td>" + user[i].values + "</td>";
    html += "<td>" + user[i].date + "</td>";
    html += "<td>" + user[i].cp + '%' + "</td>";
    html += "<td>" + user[i].notes + "</td>";
    html += "<td>" + user[i].yes + "</td>";
    html += "<td>" + user[i].result + "</td>";
    html += "<td><button class='editbtn' onClick='editTable(" + i + ")'>Edit</button></td>";
    html += "<td><button class='deltbtn' onClick='deltTable(" + i + ")'>Delete</button></td>";
    html += "</tr>";


  }
  html += "</table>";
  document.getElementById("datadisplay").innerHTML = html;

}

function editTable(i) {
  var editStorage = localStorage.getItem("users");

  if (editStorage == null)
    return;
  var personalInfoData = JSON.parse(editStorage);
  const dataEdit = personalInfoData[i];

  document.getElementById("name").value = dataEdit.name
  document.getElementById("email").value = dataEdit.email
  document.getElementById("phone").value = dataEdit.phone
  document.getElementById("website").value = dataEdit.website
  document.getElementById("contactname").value = dataEdit.contactname
  document.getElementById("contctphone").value = dataEdit.contctphone
  document.getElementById("contctemail").value = dataEdit.contctemail
  document.getElementById("epurcate").value = dataEdit.selected
  // document.getElementByName("type").value = dataEdit.values
  document.getElementById("myDate").value = dataEdit.date
  document.getElementById("cp").value = dataEdit.cp
  document.getElementById("notes").value = dataEdit.notes
  // document.getElementById("ca[]").value = dataEdit.yes
  // document.getElementByName("checkbox_nm[]").value = dataEdit.result
  editflow = true;


  var rates = document.getElementsByName('type');
  var rate_value;
  for (var i = 0; i < rates.length; i++) {
    if (rates[i].checked) {
      rate_value = rates[i].value;
    }
  }
}

function deltTable(i) {
  var localStorageData = localStorage.getItem("users");
  if (localStorageData == null) return;
  var storedData = JSON.parse(localStorageData);
  storedData.splice(i, 1)
  console.log(storedData);
  localStorage.setItem("users", JSON.stringify(storedData))

  getuserdata()
}

var editflow = false;
getuserdata()