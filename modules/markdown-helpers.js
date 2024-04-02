const fs = require('fs');
const matter = require('gray-matter'); // converts md file (with gray matter) into an object
const md = require("markdown-it")({html:true});// html:true allows you to put HTML tags in the markdown files

/**
 * Converts a markdown file into an object that includes properties
 * for the file's front matter, a 'content' property which consists
 * of the files' markdown code, and an 'html' content which consists
 * of the markdown code that has been converted to HTML
 *
 * @param {string} filePath   The path to the markdown file
 * @returns {object}
 */
function convertMarkdown(filePath){
  const obj = matter.read(filePath);
  if(obj){
      obj.html = md.render(obj.content);
  }
  return obj;
}

/**
 * Takes a path to a markdown file, reads the front-maktter (metadata)
 * and returns an object that that includes the title, author, published
 * date of the file.
 * @param {string} filePath   The path to the markdown file
 * @returns {object}          An object that has a title, author, and published property
 */
function getMarkdownMetaData(filePath){
  const obj = matter.read(filePath);
  const metaData = {
      title: obj.data.title || "No Title",
      author: obj.data.author || "No Author",
      published: obj.data.published || false
  }
  // add the object to the blogList array
  return metaData;
}

/**
 * Converts markdown files into an array of objects that can be
 * used to create a blog list page
 * @param {string} folderPath
 */
function getBlogList(folderPath){
  const blogFiles = fs.readdirSync(folderPath);
  const blogInfoList = [];
  blogFiles.forEach(fileName => {
    if(fileName.endsWith(".md")){
      const blogInfo = getMarkdownMetaData(folderPath + fileName);
      if(blogInfo.published){
        blogInfo.link = "/blog/" + fileName.replace(".md","")
        blogInfoList.push(blogInfo)
      }
    }
  });
  return blogInfoList;
}

exports.convertMarkdown = convertMarkdown;
exports.getMarkdownMetaData = getMarkdownMetaData;
exports.getBlogList = getBlogList;