function calculate_age(dob)
{ 
var diff_ms = Date.now() - dob.getTime();
var age_dt = new Date(diff_ms); 

return Math.abs(age_dt.getUTCFullYear() - 1970);
}
function toggle_hidden(document_id, expanded_text, collapsed_text, button_id, aria)
{
if(document.getElementById(document_id).hidden==true)
{
document.getElementById(document_id).hidden=false;
document.getElementById(aria).innerHTML=expanded_text;
if(button_id!="")
{
document.getElementById(button_id).innerHTML=expanded_text;
}//button_id
}//hidden
else if(document.getElementById(document_id).hidden==false)
{
document.getElementById(document_id).hidden=true;
document.getElementById(aria).innerHTML=collapsed_text;
if(button_id!="")
{
document.getElementById(button_id).innerHTML=collapsed_text;
}//button_id
}//hidden false.
else
{
document.getElementById(aria).innerHTML="error";
}//error
}//end
function ts_to_readable_time(timestamp, showsecond = false, ltext = '')
{
var seconds = Math.floor(Date.now() / 1000) - Math.floor(timestamp / 1000);
var minutes = Math.floor(seconds / 60);
var hours = Math.floor(minutes / 60);
var days = Math.floor(hours / 24);
var months = Math.floor(days / 30);
var years = Math.floor(months / 12);

var output = '';

if (years > 0)
{
output += years + ' year';
if (years > 1) output += 's';
output += ', ';
}
if (months > 0)
{
output += (months % 12) + ' month';
if (months % 12 > 1) output += 's';
output += ', ';
}
if (days > 0)
{
output += (days % 30) + ' day';
if (days % 30 > 1) output += 's';
output += ', ';
}
if (hours > 0)
{
output += (hours % 24) + ' hour';
if (hours % 24 > 1) output += 's';
output += ', ';
}
if (minutes > 0)
{
output += (minutes % 60) + ' minute';
if (minutes % 60 > 1) output += 's';
output += ', ';
}
if (showsecond || (days == 0 && hours == 0 && minutes == 0))
{
output += (seconds % 60) + ' second';
if (seconds % 60 > 1) output += 's';
output += ', ';
}
output = output.trim().replace(/,\s*$/, '');
if (output.includes(','))
{
var lastCommaPos = output.lastIndexOf(',');
output = output.slice(0, lastCommaPos) + ' and' + output.slice(lastCommaPos + 1);
}
output += ltext;
return output;
}
function createLinkListItem(href, text, target="_blank")
{
var listItem = document.createElement("li");
var link = document.createElement("a");
if(target!=="") link.target = target;
link.href = href;
link.textContent = text;
listItem.appendChild(link);
return listItem;
}
async function get_github_latest_release_version(owner, repo)
{
try
{
// Fetch the latest release from the GitHub API
const response = await fetch(`https://api.github.com/repos/${owner}/${repo}/releases/latest`);

if (!response.ok)
{
return `Failed to fetch latest release: ${response.status} ${response.statusText}`;
}

const data = await response.json();
const latestVersion = data.tag_name;
return latestVersion;
}
catch (error)
{
return `Error fetching latest release: ${error}`;
}
}
function get_storage(value, otherwise="undefined")
{
var n=localStorage.getItem(value);
if(n==="" || n==="undefined" || n===null) n=otherwise;
return n;
}
function round(num, decimals)
{
const factor = Math.pow(10, decimals);
return Math.round(num * factor) / factor;
}
function convert_size(size, round_to = 2)
{
if (size < 1) return "0 B";
if (size < 1024)
{
return round(size, round_to) + " B";
}
size = size / 1024;
if (size < 1024)
{
return round(size, round_to) + " KB";
}
size = size / 1024;
if (size < 1024)
{
return round(size, round_to) + " MB";
}
size = size / 1024;
if (size < 1024)
{
return round(size, round_to) + " GB";
}
size = size / 1024;
return round(size, round_to) + " TB";
}
function normalize_iso_datetime(dateString)
{
// Convert date string into a valid ISO format (inserting colon in the timezone)
const validDateString = dateString.replace(/([+-]\d{2})(\d{2})$/, '$1:$2');
return validDateString;
}
function local_datetime_string(date_input)
{
var r=new Date(date_input);
if (!r) r = new Date(normalize_iso_datetime(date_input));
const options = {
weekday: "long", 
month: "long", 
day: "numeric",
year: "numeric"
};
const toptions = {
hour: "numeric",
minute: "numeric",
second: "numeric",
hour12: false,
timeZoneName: "short"
};
var final = r.toLocaleDateString("EN-US", options) + " at " + r.toLocaleTimeString("EN-US", toptions);
return final;
}
function get_timestamp(dateString)
{
// Convert date string into a valid ISO format (inserting colon in the timezone)
const validDateString = normalize_iso_datetime(dateString);

// Create a new Date object from the valid date string
const date = new Date(validDateString);

// Return the timestamp (milliseconds since epoch)
return date.getTime();
}