from weasyprint import HTML

doc = HTML(filename='print.html')
doc.write_pdf('print.pdf')