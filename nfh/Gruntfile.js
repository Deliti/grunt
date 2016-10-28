

module.exports = function(grunt) {
 pkg: grunt.file.readJSON('package.json'), 
 // Grunt有grunt.file.readJSON和grunt.file.readYAML两个方法分别用于引入JSON和YAML数据。
 grunt.initConfig({
 	uglify: {// 这里是uglify任务的配置信息
	 	options: { banner: '/*!create by yaopan <%= grunt.template.today("yyyy-mm-dd")%>*//n'},
	 	static_mappings: { 
	 		files: [
	 			{src: 'js/index.js',dest: 'build/index.min.js' }, 
	 			{src: 'js/question.js',dest: 'build/question.min.js' 
	 		}],
 	}},
 	concat: {
 		bar: {  //目标项目1
 			src: ["build/*.js"],
	 	 	dest: 'dest/all.min.js'
	 	 },
	 	 css: { //目标项目二
	 	 	src: ["build/*.min.css"], 
	 	 	dest: 'dest/all.min.css'
	 	 }
 	}, 
 	cssmin: {
 		target: { 
 			files: [
	 			{
	 				expand: true, //expand动态构建文件对象，为true开启下面选项
	 				cwd: 'css/', //所有src指定的匹配都将相对于此处指定的路径
	 				src: ['*.css', '!*.min.css'],
	 				// 相对于cwd路径的匹配模式
	 				dest: 'build',
	 				// 目标文件路径前缀
	 				ext: '.min.css' 
	 				// 对于生成的dest路径中所有实际存在文件，均可使用这个属性值替换扩展名
	 				// rename
	 				// 对每个匹配的src文件调用这个函数
	 			}
 			]
 		}
 	}
 }); 
 grunt.loadNpmTasks('grunt-contrib-uglify'); 
 // 加载指定插件任务
 grunt.loadNpmTasks('grunt-contrib-concat'); 
 grunt.loadNpmTasks('grunt-contrib-cssmin'); 
 // 自定义任务，当输入grunt时，执行的任务
 grunt.registerTask('default', ['uglify', 'concat','cssmin']);}







