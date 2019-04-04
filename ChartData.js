//
var ctx = document.getElementById("myChart");
var myChart = new Chart(ctx, {
    type: 'bar',
    data: {
        labels: ["1(40px)", "2(62px)", "3(52px)", "4(55px)", "5(68px)", "6(60px)", "7(41px)", "+(28px)", "*(27px)"],
        datasets: [{
            label: '字符像素统计',
            data: [40, 62, 52, 55, 68, 60,41,28,27],
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(153, 102, 255, 0.2)',
                'rgba(255, 159, 64, 0.2)',
				'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
            ],
            borderColor: [
                'rgba(255,99,132,1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)',
				'rgba(255,99,132,1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
            ],
			hoverBackgroundColor:
			[
                'rgba(255,0,132,0.4)',
                'rgba(0, 162, 235, 0.4)',
                'rgba(255, 206, 0, 0.4)',
                'rgba(0, 192, 192, 0.4)',
                'rgba(153, 0, 255, 0.4)',
                'rgba(255, 159, 0, 0.4)',
				'rgba(255,0,132,0.4)',
                'rgba(0, 162, 235, 0.4)',
                'rgba(255, 206, 0, 0.4)',
            ],
            borderWidth: 1
        }]
    },
    options: {
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero:true
                }
            }]
        }
    }
});

//<!--这里是canvas画柱状图-->
var ctx = document.getElementById("numChart");
var myChart = new Chart(ctx, {
    type: 'bar',
      data: {
        labels: ["1(356)", "2(368)", "3(400)", "4(375)", "5(752)", "6(377)", "7(372)", "+(371)", "*(729)"],
        datasets: [{
            label: '字符出现次数统计(共4500)',
            data: [356, 368, 400, 375, 752, 377,372,371,729],
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(153, 102, 255, 0.2)',
                'rgba(255, 159, 64, 0.2)',
				'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
            ],
            borderColor: [
                'rgba(255,99,132,1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)',
				'rgba(255,99,132,1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
            ],
			hoverBackgroundColor:
			[
				'rgba(255,0,132,0.4)',
                'rgba(0, 162, 235, 0.4)',
                'rgba(255, 206, 0, 0.4)',
                'rgba(0, 192, 192, 0.4)',
                'rgba(153, 0, 255, 0.4)',
                'rgba(255, 159, 0, 0.4)',
				'rgba(255,0,132,0.4)',
                'rgba(0, 162, 235, 0.4)',
                'rgba(255, 206, 0, 0.4)',

            ],
            borderWidth: 1
        }]
    },
    options: {
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero:true
                }
            }]
        }
    }
});
