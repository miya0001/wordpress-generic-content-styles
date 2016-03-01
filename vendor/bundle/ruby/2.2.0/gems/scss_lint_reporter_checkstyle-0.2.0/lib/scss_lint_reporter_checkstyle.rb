module SCSSLint
  class Reporter::CheckstyleReporter < Reporter
    def report_lints
      output = "<?xml version=\"1.0\" encoding=\"utf-8\"?>\n"

      output << "<checkstyle version=\"1.5.6\">\n"
      lints.group_by(&:filename).each do |file_name, errors|
        file_name_absolute = File.expand_path file_name
        output << "  <file name=#{file_name_absolute.encode(xml: :attr)}>\n"

        errors.each do |error|
          output << "    <error source=\"#{error.linter.name if error.linter}\" " \
             "line=\"#{error.location.line}\" " \
             "column=\"#{error.location.column}\" " \
             "length=\"#{error.location.length}\" " \
             "severity=\"#{error.severity}\" " \
             "message=#{error.description.encode(xml: :attr)} />\n"
        end

        output << "  </file>\n"
      end
      output << "</checkstyle>\n"

      output
    end
  end
end
