//编写gulp任务
const gulp = require("gulp");
const htmlmin = require("gulp-htmlmin");

//html
gulp.task("copy-html", function () {
  return gulp
    .src("*.html")
    .pipe(
      htmlmin({
        removeEmptyAttibutes: true, // 移出所有空属性
        collapseWhitespace: true, // 压缩 html
      })
    )
    .pipe(gulp.dest("dist/"))
    .pipe(connect.reload());
});


//图片
gulp.task("images", function () {
  return gulp.src("*.{jpg,png}")
    .pipe(gulp.dest("dist/images"))
    .pipe(connect.reload());

})

//处理数据
gulp.task("data", function () {
  return gulp
    .src(["*.json", "!package.json"])
    .pipe(gulp.dest("dist/data"))
    .pipe(connect.reload());

});

//处理js
gulp.task("scripts", function () {
  return gulp
    .src(["*.js", "!gulpfile.js"])
    .pipe(gulp.dest("dist/js"))
    .pipe(connect.reload());

});

gulp.task("build", ["copy-html", "images", "data", "scripts"], function () {
  console.log("项目建立成功");
});

//处理scss文件
//gulp-sass gulp-minify-css gulp-rename
const scss = require("gulp-sass");
const minifycss = require("gulp-minify-css");
const rename = require("gulp-rename");

//一个文件一个任务
gulp.task("index-scss", function () {
  return gulp
    .src("stylesheet/index.scss")
    .pipe(scss())
    .pipe(gulp.dest("dist/css"))
    .pipe(minifycss())
    .pipe(rename("index.min.css"))
    .pipe(gulp.dest("dist/css"))
    .pipe(connect.reload());
});
gulp.task("product-scss", function () {
  return gulp
    .src("stylesheet/product.scss")
    .pipe(scss())
    .pipe(gulp.dest("dist/css"))
    .pipe(minifycss())
    .pipe(rename("product.min.css"))
    .pipe(gulp.dest("dist/css"))
    .pipe(connect.reload());
});
gulp.task("cart-scss", function () {
  return gulp
    .src("stylesheet/cart.scss")
    .pipe(scss())
    .pipe(gulp.dest("dist/css"))
    .pipe(minifycss())
    .pipe(rename("cart.min.css"))
    .pipe(gulp.dest("dist/css"))
    .pipe(connect.reload());
});

gulp.task("login-scss", function () {
  return gulp
    .src("stylesheet/login.scss")
    .pipe(scss())
    .pipe(gulp.dest("dist/css"))
    .pipe(minifycss())
    .pipe(rename("login.min.css"))
    .pipe(gulp.dest("dist/css"))
    .pipe(connect.reload());
});

gulp.task("register-scss", function () {
  return gulp
    .src("stylesheet/register.scss")
    .pipe(scss())
    .pipe(gulp.dest("dist/css"))
    .pipe(minifycss())
    .pipe(rename("register.min.css"))
    .pipe(gulp.dest("dist/css"))
    .pipe(connect.reload());
});



//启动监听
gulp.task("watch", function () {
  gulp.watch("*.html", ["copy-html"]);
  gulp.watch("*.{jpg,png}", ["images"]);
  gulp.watch(["*.json", "!package.json"], ["data"]);
  gulp.watch(["*.js", "!gulpfile.js"], ["scripts"]);
  gulp.watch("stylesheet/index.scss", ["index-scss"]);
  gulp.watch("stylesheet/product.scss", ["product-scss"]);
  gulp.watch("stylesheet/cart.scss", ["cart-scss"]);
  gulp.watch("stylesheet/login.scss", ["login-scss"]);
  gulp.watch("stylesheet/register.scss", ["register-scss"]);



});

//   //启动服务器
const connect = require("gulp-connect");

gulp.task("server", function () {
  connect.server({
    root: "dist",
    port: 8888,
    livereload: true,
  });
});


//   //同时启动server 和 watch 这两个任务
gulp.task("default", ["server", 'watch']);