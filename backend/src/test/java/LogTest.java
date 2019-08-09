import cc.mrbird.febs.ResumeBootApplication;
import cc.mrbird.febs.common.utils.MD5Util;
import cc.mrbird.febs.system.domain.LoginLog;
import cc.mrbird.febs.system.domain.SysLog;
import cc.mrbird.febs.system.domain.User;
import cc.mrbird.febs.system.service.LogService;
import cc.mrbird.febs.system.service.LoginLogService;
import cc.mrbird.febs.system.service.UserService;
import com.alibaba.fastjson.JSON;
import com.baomidou.mybatisplus.core.conditions.query.QueryWrapper;
import java.util.Date;
import java.util.List;
import lombok.extern.slf4j.Slf4j;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.context.junit4.SpringJUnit4ClassRunner;

@RunWith(SpringJUnit4ClassRunner.class)
@SpringBootTest(classes = {ResumeBootApplication.class})
@Slf4j
public class LogTest {

  @Autowired
  private UserService userService;

  @Autowired
  private LogService logService;

  @Autowired
  private LoginLogService loginLogService;

  @Test
  public void queryAll() {
    String encrypt = MD5Util.encrypt("chenchaoyun", "123456");
    log.info("encrypt {}", encrypt);
    User user = userService.findByName("chency");
    log.info("user {}", JSON.toJSONString(user));
  }

  @Test
  public void insertLoginLog(){
    QueryWrapper<SysLog> queryWrapper = new QueryWrapper<>();
    List<SysLog> sysLogList = logService.getBaseMapper().selectList(queryWrapper);

    sysLogList.forEach(sysLog -> {
      String location = sysLog.getLocation();
      String ip = sysLog.getIp();
      Date createTime = sysLog.getCreateTime();
      String userName="visitor";
      LoginLog loginLog = new LoginLog();
      loginLog.setUsername(userName);
      loginLog.setLoginTime(createTime);
      loginLog.setLocation(location);
      loginLog.setIp(ip);
      this.loginLogService.saveLoginLog(loginLog);
      log.info("saveLoginLog {} {}",createTime,JSON.toJSONString(loginLog));
    });


  }

}
